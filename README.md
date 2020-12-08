![Pokimoto](https://i.imgur.com/x8pkOWY.png)

[![MADE BY Next.js](https://img.shields.io/badge/MADE%20BY%20Next.js-000000.svg?style=flat&logo=Next.js&labelColor=000)](https://nextjs.org/)

In de planning bevatten zich de meeste links zodat het team gemakkelijk door het project heen kan navigeren, hiervoor gebruiken wij een [Click up bord](https://share.clickup.com/b/h/6-36232147-2/7dfafeeca8a42eb)

## Rolverdeling

| Team lid      | Taakverdeling |
| ------------- |:-------------:| 
| Lucas Jansen     |  Design, flowchart, opzet project, geheel project | 
| Regilio Spee      | Marktonderzoek + PVA + productoplevering uitleg document opleveren, geheel project |  
| Vadim Pisa | User stories, geheel project  |  
| Kevin Geurts | Testplan & testrapporten, geheel project   |  

## Demo

Hieronder de verschillende manieren om de demo te bekijken. Bekijk [Pokimoto op Expo](https://expo.io/@wlaj/projects/Pokimoto) voor meer informatie.

- [Bekijk Pokimoto in de browser](https://expo.io/appetize-simulator?url=https://expo.io/@wlaj/Pokimoto)

- [Open Pokimoto in de Expo Client app](https://i.imgur.com/uAgdSWf.png)

Of clone het project en run het met de code hieronder

```
 $  expo start
```


## References
 
 > [Application - Prototype ](https://www.figma.com/file/UTJiwc1ZpikpogRQdU6AYo/Pokimoto-Applicatie?node-id=0%3A1)
 
 

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits the number of posts per page
- **CMS**: built with CMS to allow editors modifying content with the quickest way
- **SEO optimized**: built-in metadata like JSON-LD
- **Shortcode**: extends content writing with React component like WordPress shortcodes

 
## User stories

Voor het project is het noodzakelijk user stories op te stellen, met **[deze link](https://doc.clickup.com/p/h/49v6f-43/f7cde536d7a3445)** zijn deze duidelijk in te zien.


## Dependencies

De Pokimoto applicatie is gemaakt met de Expo CLI in React Native. Meer hierover is te zien in ons [testplan](https://doc.clickup.com/p/h/49v6f-162/66812d24d3fe11f)


## Structure

Hieronder is de structuur van het project te zien. 

```
filecify/
     manage.py
     db.sqlite3
      app/
         ├── admin.py
         ├── apps.py
         ├── forms.py
         ├── models.py
         └── tests.py
         └── validators.py
         └── views.py
      project/
         ├── init.py
         ├── settings.py
         ├── urls.py
         ├── asgi.py
         └── wsgi.py
```

## License

MIT
