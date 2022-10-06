with open("dog_names.txt") as file:
    female_names = []
    male_names = []
    for line in file:
        female, male = line.strip().split()
        female_names.append(female)
        male_names.append(male)
    with open("female_dog_names.txt", "w") as female_file:
        for name in female_names:
            female_file.write(name + "\n")
    with open("male_dog_names.txt", "w") as male_file:
        for name in male_names:
            male_file.write(name + "\n")
