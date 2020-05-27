package elasticsearch

import (
	"errors"
	"fmt"
	"i-go/utils"

	"github.com/olivere/elastic"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

var ESClient *elastic.Client

type ESConf struct {
	Addr     string `json:"addr"`
	Port     string `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func Init() {
	defer utils.InitLog("ElasticSearch")()

	c, err := parseConf()
	if err != nil {
		panic(err)
	}
	ESClient, err = newClient(c)
	if err != nil {
		panic(err)
	}

	host := fmt.Sprintf("http://%s:%s", c.Addr, c.Port)
	version, err := ESClient.ElasticsearchVersion(host)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Elasticsearch version %s\n", version)

	ESClient.CreateIndex("title_index").BodyString("")
}

func parseConf() (*ESConf, error) {
	var c ESConf
	if err := viper.UnmarshalKey("elasticsearch", &c); err != nil {
		return &ESConf{}, err
	}
	if c.Addr == "" {
		return &ESConf{}, errors.New("elasticsearch conf nil")
	}
	return &c, nil
}

func newClient(c *ESConf) (*elastic.Client, error) {
	host := fmt.Sprintf("http://%s:%s", c.Addr, c.Port)
	// errorLog := log.New(os.Stdout, "APP", log.LstdFlags)
	logger := logrus.New()
	ESClient, err := elastic.NewClient(
		/*	Sniff开启时会使客户端去嗅探整个集群的状态，把集群中其它机器的ip地址加到客户端中。这样做的好处是，一般你不用手动设置集群里所有集群的ip到连接客户端，
			它会自动帮你添加，并且自动发现新加入集群的机器。
			当ES服务器监听(publish_address)使用内网服务器IP，而访问(bound_addresses)使用外网IP时，需要关闭该功能。因为在自动发现时会使用内网IP进行通信，导致无法连接到ES服务器。
			不设置时，默认为enable(关闭客户端去嗅探整个集群的状态)。
		*/
		elastic.SetSniff(false),     // 关闭客户端嗅探
		elastic.SetErrorLog(logger), // 指定用什么来打印日志
		elastic.SetURL(host),
		elastic.SetBasicAuth(c.Username, c.Password))
	if err != nil {
		return &elastic.Client{}, err
	}
	return ESClient, nil
}
