**Pet Profiles**
This project was my first attempt at learning full stack web development, deciding on using React, Flask, and later Tailwind CSS. I made it with the intention of being a pet adoption website where you get to flick through a list of pets admitted to the site by adoption centers clicking on their photo would give their info plus contact details. The web app could also function as a social media for sharing pets.

The app allows users to:
Create an account and log in.
Browse through a list of pets.
Favourite or unfavourite pets, saving them to their user profile.
View profile details and navigate between pets.
move between pages using React Router.

I wanted to focus on getting the core idea working rather than making the visuals look nice.

**Tech Stack**
Frontend: React + React Router DOM
Styling: Tailwind CSS
I only used Tailwind briefly to explore how it works, so the styling is minimal and mostly functional.
Backend: Flask (Python)

**Known Issue**
There’s a small bug when removing the last favourited pet from the profile page, for a frame the app displays the “No favourites yet ❤️” screen before correcting itself.

Although this doesn’t break functionality i thought it wasnt major enough to fix for a first attempt

**If continued**
I would add a filter for pets so you wouldnt have to see dogs if you are looking for cats etc.

**Installation**
terminal 1 :
```cd frontend```
```npm install```
```npm run dev```

terminal 2 :
```cd backend```
```venv\Scripts\Activate```
```pip install -r requirements.txt```
```python main.py```