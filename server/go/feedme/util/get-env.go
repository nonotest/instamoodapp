package util

import "os"

// EnvToBool will evaluate an environment variable value to be true or false based upon the following rules.
//
//	false	"NULL"/"null"; "NIL"/"nil"; ""; "0"; "FALSE"/"false"
//	true	otherwise
func EnvToBool(env string) bool {
	return env != "NULL" && env != "NIL" && env != "null" && env != "nil" && env != "" && env != "0" && env != "FALSE" && env != "false"
}

// GetEnv will return the value of the environment variable with the provided key. If the environment variable doesn't
// exist then the default value provided will be returned instead.
func GetEnv(envKey string, defaultValue string) string {
	envVal := os.Getenv(envKey)
	if envVal == "" {
		envVal = defaultValue
	}

	return envVal
}
