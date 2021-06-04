package convert

import (
	"reflect"

	"github.com/gogf/gf/util/gconv"
	"github.com/mitchellh/mapstructure"
)

// Struct2Map 结构体转map 利用反射实现
func Struct2Map(obj interface{}) map[string]interface{} {
	t := reflect.TypeOf(obj)
	v := reflect.ValueOf(obj)
	// 如果是指针，则获取其所指向的元素
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
		v = v.Elem()
	}

	var data = make(map[string]interface{})
	// 只有结构体可以获取其字段信息
	if t.Kind() == reflect.Struct {
		for i := 0; i < t.NumField(); i++ {
			data[t.Field(i).Name] = v.Field(i).Interface()
		}
	}
	return data
}

// Map2Struct  m map s 结构体指针 字段类型必须一致
func Map2Struct(m map[string]interface{}, s interface{}) error {
	return mapstructure.Decode(m, s)
}

// Map2StructAny 任意字段类型都可转换
func Map2StructAny(m interface{}, s interface{}) error {
	return gconv.Struct(m, s)
}
