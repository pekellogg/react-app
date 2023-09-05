# Mars Rovers

Explore the Red Planet through the photos taken by NASA rovers, Curiosity, Opportunity, Spirit and Perseverance[^1].

## Usage

**_Rovers tab: click any rover to go to their page_**

![Screenshot of all rovers at the Rovers tab, added in the Markdown.](/client/screenshots/rovers-page.png)

**_Curiosity_**

![Screenshot of Curiosity rover's profile, added in the Markdown.](/client/screenshots/curiosity-page.png)

**_Curiosity's photos_**

![Screenshot of Curiosity's camera and its photos, added in the Markdown.](/client/screenshots/curiosity-photos.png)

**_Photos tab: all photos_**

![Screenshot of all photos at the Photos tab, added in the Markdown.](/client/screenshots/photos-page.png)

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
