package concat_string

import (
	"bytes"
	"fmt"
	"strconv"
	"strings"
	"testing"
)

const numbers = 3

// https://github.com/geektime-geekbang/go_learning
func BenchmarkSprintf(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var s string
		for j := 0; j < numbers; j++ {
			s = fmt.Sprintf("%v%v", s, i)
		}
	}
}

func BenchmarkStringBuilder(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var builder strings.Builder
		for j := 0; j < numbers; j++ {
			builder.WriteString(strconv.Itoa(j))
		}
		_ = builder.String()
	}
}

func BenchmarkBytesBuf(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var buf bytes.Buffer
		for j := 0; j < numbers; j++ {
			buf.WriteString(strconv.Itoa(j))
		}
		_ = buf.String()
	}
}

func BenchmarkStringAdd(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var s string
		for j := 0; j < numbers; j++ {
			s += strconv.Itoa(i)
		}
	}
}
