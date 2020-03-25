from scraper import scrape;

def parse(input_word, iterations):
    parse_string = scrape(iterations);
    return parse_string.count(input_word);
