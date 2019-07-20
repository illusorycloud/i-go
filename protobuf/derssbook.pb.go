// Code generated by protoc-gen-go. DO NOT EDIT.
// source: derssbook.proto

package go_protoc

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Person_PhoneType int32

const (
	Person_MOBILE Person_PhoneType = 0
	Person_HOME   Person_PhoneType = 1
	Person_WORK   Person_PhoneType = 2
)

var Person_PhoneType_name = map[int32]string{
	0: "MOBILE",
	1: "HOME",
	2: "WORK",
}

var Person_PhoneType_value = map[string]int32{
	"MOBILE": 0,
	"HOME":   1,
	"WORK":   2,
}

func (x Person_PhoneType) String() string {
	return proto.EnumName(Person_PhoneType_name, int32(x))
}

func (Person_PhoneType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f684334dd2f03a7e, []int{0, 0}
}

type Person struct {
	Name                 string                `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Id                   int32                 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Email                string                `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	Phones               []*Person_PhoneNumber `protobuf:"bytes,4,rep,name=phones,proto3" json:"phones,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *Person) Reset()         { *m = Person{} }
func (m *Person) String() string { return proto.CompactTextString(m) }
func (*Person) ProtoMessage()    {}
func (*Person) Descriptor() ([]byte, []int) {
	return fileDescriptor_f684334dd2f03a7e, []int{0}
}

func (m *Person) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Person.Unmarshal(m, b)
}
func (m *Person) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Person.Marshal(b, m, deterministic)
}
func (m *Person) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Person.Merge(m, src)
}
func (m *Person) XXX_Size() int {
	return xxx_messageInfo_Person.Size(m)
}
func (m *Person) XXX_DiscardUnknown() {
	xxx_messageInfo_Person.DiscardUnknown(m)
}

var xxx_messageInfo_Person proto.InternalMessageInfo

func (m *Person) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Person) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Person) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Person) GetPhones() []*Person_PhoneNumber {
	if m != nil {
		return m.Phones
	}
	return nil
}

type Person_PhoneNumber struct {
	Number               string           `protobuf:"bytes,1,opt,name=number,proto3" json:"number,omitempty"`
	Type                 Person_PhoneType `protobuf:"varint,2,opt,name=type,proto3,enum=go_protoc.Person_PhoneType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *Person_PhoneNumber) Reset()         { *m = Person_PhoneNumber{} }
func (m *Person_PhoneNumber) String() string { return proto.CompactTextString(m) }
func (*Person_PhoneNumber) ProtoMessage()    {}
func (*Person_PhoneNumber) Descriptor() ([]byte, []int) {
	return fileDescriptor_f684334dd2f03a7e, []int{0, 0}
}

func (m *Person_PhoneNumber) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Person_PhoneNumber.Unmarshal(m, b)
}
func (m *Person_PhoneNumber) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Person_PhoneNumber.Marshal(b, m, deterministic)
}
func (m *Person_PhoneNumber) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Person_PhoneNumber.Merge(m, src)
}
func (m *Person_PhoneNumber) XXX_Size() int {
	return xxx_messageInfo_Person_PhoneNumber.Size(m)
}
func (m *Person_PhoneNumber) XXX_DiscardUnknown() {
	xxx_messageInfo_Person_PhoneNumber.DiscardUnknown(m)
}

var xxx_messageInfo_Person_PhoneNumber proto.InternalMessageInfo

func (m *Person_PhoneNumber) GetNumber() string {
	if m != nil {
		return m.Number
	}
	return ""
}

func (m *Person_PhoneNumber) GetType() Person_PhoneType {
	if m != nil {
		return m.Type
	}
	return Person_MOBILE
}

type AddressBook struct {
	People               []*Person `protobuf:"bytes,1,rep,name=people,proto3" json:"people,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *AddressBook) Reset()         { *m = AddressBook{} }
func (m *AddressBook) String() string { return proto.CompactTextString(m) }
func (*AddressBook) ProtoMessage()    {}
func (*AddressBook) Descriptor() ([]byte, []int) {
	return fileDescriptor_f684334dd2f03a7e, []int{1}
}

func (m *AddressBook) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AddressBook.Unmarshal(m, b)
}
func (m *AddressBook) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AddressBook.Marshal(b, m, deterministic)
}
func (m *AddressBook) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AddressBook.Merge(m, src)
}
func (m *AddressBook) XXX_Size() int {
	return xxx_messageInfo_AddressBook.Size(m)
}
func (m *AddressBook) XXX_DiscardUnknown() {
	xxx_messageInfo_AddressBook.DiscardUnknown(m)
}

var xxx_messageInfo_AddressBook proto.InternalMessageInfo

func (m *AddressBook) GetPeople() []*Person {
	if m != nil {
		return m.People
	}
	return nil
}

func init() {
	proto.RegisterEnum("go_protoc.Person_PhoneType", Person_PhoneType_name, Person_PhoneType_value)
	proto.RegisterType((*Person)(nil), "go_protoc.Person")
	proto.RegisterType((*Person_PhoneNumber)(nil), "go_protoc.Person.PhoneNumber")
	proto.RegisterType((*AddressBook)(nil), "go_protoc.AddressBook")
}

func init() { proto.RegisterFile("derssbook.proto", fileDescriptor_f684334dd2f03a7e) }

var fileDescriptor_f684334dd2f03a7e = []byte{
	// 255 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x90, 0xd1, 0x4b, 0xc3, 0x30,
	0x10, 0x87, 0x6d, 0xd7, 0x05, 0x7b, 0x85, 0x59, 0x0f, 0x91, 0xa2, 0x08, 0xa5, 0x4f, 0x15, 0xa1,
	0xc2, 0x44, 0xf0, 0xd5, 0xc1, 0x40, 0xd1, 0xd9, 0x11, 0x44, 0x1f, 0x65, 0x35, 0x87, 0x96, 0xad,
	0xbd, 0x90, 0xcc, 0x87, 0xfd, 0xf3, 0x22, 0xcd, 0xca, 0x10, 0xc4, 0xb7, 0xef, 0x7e, 0xf9, 0xb8,
	0xbb, 0x1c, 0x1c, 0x28, 0x32, 0xd6, 0x56, 0xcc, 0xcb, 0x42, 0x1b, 0x5e, 0x33, 0x86, 0x1f, 0xfc,
	0xe6, 0xe8, 0x3d, 0xfb, 0xf6, 0x40, 0xcc, 0xc9, 0x58, 0x6e, 0x11, 0x21, 0x68, 0x17, 0x0d, 0x25,
	0x5e, 0xea, 0xe5, 0xa1, 0x74, 0x8c, 0x23, 0xf0, 0x6b, 0x95, 0xf8, 0xa9, 0x97, 0x0f, 0xa5, 0x5f,
	0x2b, 0x3c, 0x82, 0x21, 0x35, 0x8b, 0x7a, 0x95, 0x0c, 0x9c, 0xb4, 0x2d, 0xf0, 0x1a, 0x84, 0xfe,
	0xe4, 0x96, 0x6c, 0x12, 0xa4, 0x83, 0x3c, 0x1a, 0x9f, 0x15, 0xbb, 0x01, 0xc5, 0xb6, 0x79, 0x31,
	0xef, 0xde, 0x9f, 0xbe, 0x9a, 0x8a, 0x8c, 0xec, 0xe5, 0x93, 0x17, 0x88, 0x7e, 0xc5, 0x78, 0x0c,
	0xa2, 0x75, 0xd4, 0x6f, 0xd0, 0x57, 0x78, 0x09, 0xc1, 0x7a, 0xa3, 0xc9, 0x6d, 0x31, 0x1a, 0x9f,
	0xfe, 0xd3, 0xfb, 0x79, 0xa3, 0x49, 0x3a, 0x31, 0xbb, 0x80, 0x70, 0x17, 0x21, 0x80, 0x98, 0x95,
	0x93, 0xfb, 0xc7, 0x69, 0xbc, 0x87, 0xfb, 0x10, 0xdc, 0x95, 0xb3, 0x69, 0xec, 0x75, 0xf4, 0x5a,
	0xca, 0x87, 0xd8, 0xcf, 0x6e, 0x20, 0xba, 0x55, 0xca, 0x90, 0xb5, 0x13, 0xe6, 0x25, 0x9e, 0x83,
	0xd0, 0xc4, 0x7a, 0xd5, 0x9d, 0xa1, 0xfb, 0xca, 0xe1, 0x9f, 0x71, 0xb2, 0x17, 0x2a, 0xe1, 0xe2,
	0xab, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x13, 0x85, 0x80, 0xc6, 0x5f, 0x01, 0x00, 0x00,
}