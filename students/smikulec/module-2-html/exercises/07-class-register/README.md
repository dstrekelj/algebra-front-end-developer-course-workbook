# Assignment

You are tasked with creating an online class register for year 1 middle school students.

The online class register has a homepage and a page for every class in the school year.

The homepage must contain the following:

- the title "Year 1 class register";
- navigation to class pages.

Every class page must contain the following:

- the title "1.A class register", where *1.A* is replaced with the correct class name depending on the page;
- a table captioned "Students" listing students in the class;
- a table captioned "Class schedule" listing the weekly class schedule.

The "Students" table must have the following structure:

| First name | Last name | Date of birth |
| ---------- | --------- | ------------- |
| Jane       | Doe       | 1.1.2003.     |
| ...        | ...       | ...           |

The "Class schedule" table must have the following structure:

| # | Monday | Tuesday | Wednesday | Thursday | Friday |
| - | ------ | ------- | --------- | -------- | ------ |
| 1 |        |         |           |          |        |
| 2 |        |         |           |          |        |
| 3 |        |         |           |          |        |
| 4 |        |         |           |          |        |
| 5 |        |         |           |          |        |
| 6 |        |         |           |          |        |

## Assets

- `1a-schedule.txt` - 1.A class schedule
- `1a-students.txt` - 1.A class student list
- `1b-schedule.txt` - 1.B class schedule
- `1b-students.txt` - 1.B class student list

## Deliverables

To complete the assignment, deliver the following:

- `index.html` file with the homepage;
- `1a.html` file with the 1A class page;
- `1b.html` file with the 1B class page.

## Tips, tricks, and notes

- Use hyperlinks to connect documents together
- Use the `rowspan` and `colspan` attributes to merge cells with the same values
- Use the `scope` attribute to define the scope of a table heading
