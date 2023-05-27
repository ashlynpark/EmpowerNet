import csv
import json

def convert_csv_to_json(csv_file, json_file):
    with open(csv_file, 'r') as f:
        c_data = csv.DictReader(f)
        j_data = json.dumps([row for row in c_data], indent=4)

    with open(json_file, 'w') as f:
        f.write(j_data)


if __name__ == "__main__":
    #input from this csv
    csv_file_path = '../data/top_50_USA_tech_companies.csv'

    #output to this json
    json_file_path = '../data/top_50_USA_tech_companies.json'

    # Convert CSV to JSON
    convert_csv_to_json(csv_file_path, json_file_path)

