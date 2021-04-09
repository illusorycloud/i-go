package utils

import (
	"github.com/satori/go.uuid"
)

type stringHelper struct {
}

// StringHelper string相关工具函数
var StringHelper = &stringHelper{}

// GetUUID 生成UUID
/*
两个uuid库
https://github.com/google/uuid
https://github.com/satori/go.uuid
*/
func (stringHelper) GetUUID() string {
	return uuid.NewV4().String()
}
