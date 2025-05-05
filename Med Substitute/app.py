from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Read the CSV file into a pandas DataFrame
df = pd.read_csv("medicine_dataset.csv")

# Function to get substitutes for drugs with names containing a partial name
# def get_substitutes_partial(partial_name):
#     matches = df[df['name'].str.contains(partial_name, case=False)]
#     substitutes_dict = {}
#     for index, row in matches.iterrows():
#         drug_name = row['name']
#         substitutes = [row['substitute0'], row['substitute1'], row['substitute2'], row['substitute3'], row['substitute4']]
#         substitutes = [substitute for substitute in substitutes if isinstance(substitute, str)]
#         substitutes_dict[drug_name] = substitutes
#     return substitutes_dict

# @app.route("/", methods=["GET", "POST"])
# def index():
#     if request.method == "POST":
#         partial_name = request.form["partial_name"]
#         substitutes_dict = get_substitutes_partial(partial_name)
#         return render_template("index.html", partial_name=partial_name, substitutes_dict=substitutes_dict)
#     return render_template("index.html", partial_name="", substitutes_dict={})

# Function to get details for drugs with names containing a partial name
def get_details_partial(partial_name):
    matches = df[df['name'].str.contains(partial_name, case=False)]
    details_dict = {}
    for index, row in matches.iterrows():
        drug_name = row['name']
        details = {
            "substitutes": [substitute for substitute in row[['substitute0', 'substitute1', 'substitute2', 'substitute3', 'substitute4']].values.tolist() if isinstance(substitute, str)],
            "side_effects": [side_effect for side_effect in row[['sideEffect0', 'sideEffect1', 'sideEffect2', 'sideEffect3', 'sideEffect4']].values.tolist() if isinstance(side_effect, str)],
            "uses": [use for use in row[['use0', 'use1', 'use2', 'use3', 'use4']].values.tolist() if isinstance(use, str)],
            "chemical_class": row['Chemical Class'],
            "habit_forming": row['Habit Forming'],
            "therapeutic_class": row['Therapeutic Class'],
            "action_class": row['Action Class']
        }
        details_dict[drug_name] = details
    return details_dict
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        partial_name = request.form["partial_name"]
        details_dict = get_details_partial(partial_name)
        return render_template("index.html", partial_name=partial_name, details_dict=details_dict)
    return render_template("index.html", partial_name="", details_dict={})



if __name__ == "__main__":
    app.run(debug=True)
