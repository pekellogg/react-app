# Mars Rovers

Explore the Red Planet through the photos taken by NASA rovers, Curiosity, Opportunity, Spirit and Perseverance[^1].

## Usage

**_Rovers tab: all rovers_**

![Screenshot of all rovers at the Rovers tab, added in the Markdown.](/client/screenshots/mars-rovers.png)

**_Rovers tab: click Perseverance_**

![Screenshot of Perseverance rover's profile, added in the Markdown.](/client/screenshots/perseverance-show.png)

**_Rovers tab: click any of Perseverance's cameras to view its photos_**

![Screenshot of Perseverance's camera and its photos, added in the Markdown.](/client/screenshots/perseverance-camera-photos.png)

**_Photos tab: all photos_**

![Screenshot of all photos at the Photos tab, added in the Markdown.](/client/screenshots/mars-rovers-photos-all.png)

### Contributing

Pull requests with constructive feedback welcomed

#### Contributing: local installation

Fork & clone this repository

#### Rails Server

```bash
bundle install # install dependencies
rails db:create # create the database
rails db:migrate # run migrations
rails db:seed # seed the database with rovers, cameras, photos data
rails s # start the server
```

View documentation with command

```bash
bundle exec rspec -f d
```

![Sample of Rails documentation, added in the Markdown.](/client/screenshots/rails-documentation-thru-rspec.png)

Execute all unit tests with command

```bash
bundle exec rspec spec/
```

Or execute specific unit test by referencing line number

```bash
bundle exec rspec spec/models/photo_spec.rb:6
```

#### React Frontend

```bash
cd client
npm install # install dependencies
npm start # start the server
```

#### Resources

[^1]:
    This application derives data from the Mars Photo API maintained by chrisccerami.
    Explore the [repository](https://github.com/chrisccerami/mars-photo-api).
