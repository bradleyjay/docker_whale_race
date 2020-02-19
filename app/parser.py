from scraper import scrape;

def parser(input_word):
    parse_string = scrape();
    return parse_string.count(input_word);

print(parser("Bernie"))
