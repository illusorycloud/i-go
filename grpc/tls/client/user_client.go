package main

import (
	"context"
	"fmt"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"i-go/grpc/tls"
	"i-go/grpc/tls/proto"
	"i-go/utils"
	"time"
)

/*
1. credentials.NewServerTLSFromFile("../../conf/server.pem", "../../conf/server.key") 构建TransportCredentials
2. grpc.Dial("localhost:50052", grpc.WithTransportCredentials(c)) 建立带tls的连接
*/
func main() {
	crt, _ := tls.Client()
	fmt.Println(crt)
	crt = "D:/Home/17x/Projects/i-go/grpc/tls/assets/client.crt"
	//c, err := credentials.NewClientTLSFromFile("../../conf/server.pem", "go-grpc-example")
	c, err := credentials.NewClientTLSFromFile(crt, "go-grpc-example")
	if err != nil {
		logrus.Fatalf("credentials.NewClientTLSFromFile err: %v", err)
	}
	// grpc.Dial 创建连接 grpc.WithBlock() 阻塞直到连接成功 WithTransportCredentials() tls
	ctx, _ := context.WithTimeout(context.Background(), time.Second*3)
	conn, err := grpc.DialContext(ctx, "localhost:50052", grpc.WithBlock(), grpc.WithTransportCredentials(c))
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	client := proto.NewUserServiceClient(conn)
	resp, err := client.Create(context.Background(), &proto.UserReq{Name: "illusory", Age: "23"})
	if err != nil {
		logrus.WithFields(logrus.Fields{"Caller": utils.Caller(), "Scenes": "create user  error"}).Error(err)
	}
	fmt.Printf("Create User Resp: %v \n", resp.Message)
}
