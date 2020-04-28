from scraper import scrape;
import inflect;
import re;

def parse(input_word):
    plural_engine = inflect.engine()

    parse_string = scrape().lower();

    parse_string = re.sub("[^A-Za-z0-9]+", " ", parse_string)

    singular_count = parse_string.count(" " + input_word + " ")

    plural_word = plural_engine.plural(input_word)
    plural_count = parse_string.count(" " + plural_word + " ")

    total_count = singular_count + plural_count
    print(total_count)
    return total_count;
