
default: css

CSS_IN=src/scss/json-formatter.scss
CSS_OUT=docs/main.css

css:
	sass ${CSS_IN}:${CSS_OUT} --no-source-map

csswatch:
	sass --watch ${CSS_IN}:${CSS_OUT} --no-source-map

clean:
	@rm -f ${CSS_OUT}
