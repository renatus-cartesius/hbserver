import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";

const YAML_CONFIG_FILENAME = 'config.yml'

export default () => {
  return yaml.load(
    readFileSync('/etc/hbserver/config.yml', 'utf8'),
  ) as Record<string, any>;
}
