# Exposure System

Exposure system is a new initiative to expose **Humans of AltCampus** to various ideas and opinions on subjects other than just programming, by providing them with resources and challenges on a regular basis.

A student reads/watches the resource and submits their top takeaways from it.

This system also aims to bring students out of their comfort zone by giving them challenges, which would be in pairs or in groups. As part of motivating people to do these tasks, the system incentivizes completion of these challenges and punishes people who don't through the internal Stars platform.

Users can login to see:

- a feed of submissions by fellow community members.
- a personal feed.
- Update their profile.

Admins can:

- Approve / Reject registrations from students and alumni.
- Add new resources and challenges.
- See a list of resources.
- See a list of students.
- See a stream of submissions.

## How to launch the app locally?

- STEP 1: Fork the project repo and clone it in your local repository.

- STEP 2: Have Node installed. If not, download and install [from here](https://nodejs.org/en/).

```
> node -v
```

- STEP 3: Install the npm modules from the package.json

```
> npm install
```

note: We're using `nodemon` that's installed globally on our systems.

```
> npm install -g nodemon
```

- STEP 4: Launch the application using below command:

```
> npm start
```

note: The application will be running at http://localhost:3000
if not then please check if you have set any default PORT in your environment/path variable
i.e http://localhost:<your_env_port_variable>

## Wiki

[Wiki for Exposure System (WIP)](https://github.com/AltCampus/exposuresystem/wiki)

### Orbit

Another project from our batch: @AltCampus's application tracking system: [Orbit](https://github.com/AltCampus/orbit)
