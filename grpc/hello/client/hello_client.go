package main

import (
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"i-go/grpc/hello/proto"
	"log"
)

const (
	address     = "localhost:50051"
	defaultName = "world"
)

func main() {
	// 开启一个链接
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		panic(err)
	}
	defer conn.Close()
	// 用conn new一个client
	c := proto.NewHelloClient(conn)
	// 用client 调用方法
	r, err := c.SayHello(context.Background(), &proto.HelloReq{Name: defaultName})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}
	log.Printf("Greeting: %s", r.Message)
}
