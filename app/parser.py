from scraper import scrape;

def parse(input_word):
    parse_string = scrape();
    return parse_string.count(input_word);
