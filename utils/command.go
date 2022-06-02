package utils

import (
	"os/exec"
	"strings"
)

func Command(cmd *exec.Cmd) error {
	var w strings.Builder
	cmd.Stderr = &w
	err := cmd.Run()
	if err != nil {
		return err
	}
	return nil
}
