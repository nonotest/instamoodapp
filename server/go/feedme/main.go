package main

import (
	"os"

	"feedme/commands"
)

func main() {
	commands.Execute(os.Args[1:])
}
