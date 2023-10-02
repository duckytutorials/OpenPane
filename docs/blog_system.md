# Blog System

## Setup

for the blog system to work you need to create a routes named  
"/api/blog/create",  
"/api/blog/delete",  
"/api/blog/edit",  
"/api/blog/list"

## Data

### They will sent data to (POST Method)

"/api/blog/create"

```json
{
  "title": "title",
  "description": "description",
  "image": "cdn.daisypanel.com/image/image_hash.png/jpeg/jpg/webp"
}
```

"/api/blog/edit"

```json
{
  "old_title": "old_title",
  "old_description": "description",
  "old_image": "cdn.daisypanel.com/image/image_hash.png/jpeg/jpg/webp",
  "title": "title",
  "description": "description",
  "image": "cdn.daisypanel.com/image/image_hash.png/jpeg/jpg/webp"
}
```

"/api/blog/list"

```json
[
  {
    "title": "title",
    "banner": "cdn.daisypanel.com/image/image_hash.com",
    "description": "trunicated_description"
  }
]
```

## Notes

They should have a connection to your Database  
for success the Json should send

```json
{ "message": "success" }
```

for error the Json should send

```json
{ "message": "error" }
```
