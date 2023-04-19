# Mars Rovers

View the [website] (`https://react-app-gdin.onrender.com`).

Explore the Red Planet through the photos taken by NASA rovers, Curiosity, Opportunity, Spirit and Perseverance.

## Usage

Click the Rovers tab to see views--

![Screenshot of all rovers at the Rovers tab, added in the Markdown.](/client/screenshots/mars-rovers.png)

![Screenshot of Perseverance rover's profile, added in the Markdown.](/client/screenshots/perseverance-show.png)

![Screenshot of Perseverance's camera and its photos, added in the Markdown.](/client/screenshots/perseverance-camera-photos.png)

Click the Photos tab to see views--

![Screenshot of all photos at the Photos tab, added in the Markdown.](/client/screenshots/mars-rovers-photos-all.png)

### Contributing

Pull requests with constructive feedback welcomed

#### Contributing: local installation

Fork & clone this repository

#### Rails Server: install dependencies, prepare the database, start the server

```bash
bundle install
rails db:setup
rails s
```

#### React Frontend: install dependencies, start the server

```bash
cd client
npm install
npm start
```

#### Resources Citation

This application derives data from the Mars Photo API maintained by chrisccerami.
Explore the [repository](https://github.com/chrisccerami/mars-photo-api).
