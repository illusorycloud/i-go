package main

import (
	"fmt"
	"net"
)

func main() {
	fmt.Println("服务端开始监听...")
	// "tcp" 表示使用网络协议是 tcp
	// "0.0.0.0:8888" 本地监听8888端口
	listener, e := net.Listen("tcp", "0.0.0.0:8888")
	if e != nil {
		fmt.Printf("listen error err=%v \n", e)
		return
	}

	// 延迟关闭
	defer listener.Close()

	for {
		fmt.Println("等待客户端连接")
		conn, e := listener.Accept()
		if e != nil {
			fmt.Printf("Accept error err= %v\n", e)
		} else {
			fmt.Printf("Accept success conn=%v clientIP%v \n", conn, conn.RemoteAddr().String())
		}
		// 这里准备一个协程 为客户端服务
		go process(conn)
	}

}

func process(conn net.Conn) {
	// 循环接收客户端的连接
	defer conn.Close()

	for {
		// 创建一个新的切片
		buf := make([]byte, 1024)
		// 等待客户端通过conn发送信息
		// 如果客户端没有发送，那么协程阻塞在这里
		fmt.Printf("服务器在等待客户端%v发送信息\n", conn.RemoteAddr().String())
		n, err := conn.Read(buf)
		if err != nil {
			fmt.Printf("conn.Read error err= %v\n", err)
			// 出错后直接退出
			return
		}
		// 显示客户端发送的内容 只显示收到的数据 不显示后面的其他默认数据
		fmt.Printf(string(buf[:n]))

	}
}
