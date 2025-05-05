# import pandas as pd

# # Read the CSV file into a pandas DataFrame
# df = pd.read_csv("medicine_dataset.csv")

# # Function to get substitutes for a given drug
# def get_substitutes(drug_name):
#     substitutes = df[df['name'] == drug_name][['substitute0', 'substitute1', 'substitute2', 'substitute3', 'substitute4']].values.tolist()[0]
#     return [substitute for substitute in substitutes if isinstance(substitute, str)]

# # Example usage
# drug_name = "amitop"
# substitutes = get_substitutes(drug_name)
# print("Substitutes for", drug_name, ":", substitutes)
import pandas as pd

# Read the CSV file into a pandas DataFrame
df = pd.read_csv("medicine_dataset.csv")

# Function to get substitutes for drugs with names containing a partial name
def get_substitutes_partial(partial_name):
    matches = df[df['name'].str.contains(partial_name, case=False)]
    substitutes_dict = {}
    for index, row in matches.iterrows():
        drug_name = row['name']
        substitutes = [row['substitute0'], row['substitute1'], row['substitute2'], row['substitute3'], row['substitute4']]
        substitutes = [substitute for substitute in substitutes if isinstance(substitute, str)]
        substitutes_dict[drug_name] = substitutes
    return substitutes_dict

# Example usage
partial_name = "augmentin"
substitutes_dict = get_substitutes_partial(partial_name)
print("Substitutes for drugs containing '{}' in their name:".format(partial_name))
for drug, substitutes in substitutes_dict.items():
    print(drug, ":", substitutes)
