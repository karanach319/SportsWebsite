my_var = 1
my_modified_var = str(my_var)

my_str_var = "123"
print(int(my_str_var) + 5)

# arrays/lists
my_shopping_list = ['milk', 'eggs', 4, 4.5]
print(my_shopping_list)

my_shopping_list.append('cheese')
print(my_shopping_list)

my_shopping_list.pop()
print(my_shopping_list)

my_shopping_list[1] = 'oranges'
print(my_shopping_list)

# tuples - immutable
my_todo_list = ('homework', 'CS project')
print(my_todo_list)
# my_todo_list[1] = 'groceries' # problematic - will throw an error

# hash sets - no duplicates, order is no longer guaranteed
my_grocery_list = set()  # instantiate
my_grocery_list.add('apples')
print(my_grocery_list)
my_grocery_list.add(2)
print(my_grocery_list)

my_grocery_list.add('apples')
print(my_grocery_list)


# hash maps {k: v}
students_gpa = {}
students_gpa['Karan'] = 5  # {'Aidan': 5}
students_gpa['Aidan'] = 6  # {'Aidan': 5, 'Eugen': 6}
print(students_gpa)
# accessing elemnts
print(students_gpa['Aidan'])
students_gpa['Aidan'] = 2
print(students_gpa)


# iteration
print(my_shopping_list)

# while loops - method 1
i = 0
while i < len(my_shopping_list):
    print(my_shopping_list[i])
    i = i + 1

# for .. each loop
# for VARNAME in STRUCTURE:

for food_item in my_shopping_list:
    print(food_item)