from scraper import scrape;
import inflect;

def parse(input_word, iterations):
    plural_engine = inflect.engine()

    parse_string = scrape(iterations).lower();

    singular_count = parse_string.count(" " + input_word + " ")

    plural_word = plural_engine.plural(input_word)
    plural_count = parse_string.count(" " + plural_word + " ")

    total_count = singular_count + plural_count
    return total_count;
