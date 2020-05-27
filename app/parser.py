from scraper import scrape;
import inflect;
import re;

def parse(input_word):
    plural_engine = inflect.engine()

    scrape_results= scrape()

    scrape_text = scrape_results["string"]

    remaining_subs = scrape_results["remaining_subs"]

    parse_string = scrape_text.lower();

    parse_string = re.sub("[^A-Za-z0-9]+", " ", parse_string)

    singular_count = parse_string.count(" " + input_word + " ")

    plural_word = plural_engine.plural(input_word)
    plural_count = parse_string.count(" " + plural_word + " ")

    total_count = singular_count + plural_count

    return {"total_count": total_count, "remaining_subs": remaining_subs};
