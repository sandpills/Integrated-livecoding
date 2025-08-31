# Integrated Approaches to Live Coding - Course Portal

This is a static site built with [Eleventy (11ty)](https://www.11ty.dev/) that converts Markdown content to HTML while maintaining your existing CSS styling.

## File Structure

```
├── src/                   
│   ├── index.md          
│   └── style.css        
├── _layouts/              
│   └── base.njk          
├── _site/                
└── .eleventy.js         
```

## Adding New Content

1. Create a new `.md` file in the `src/` folder
2. Add front matter at the top:
   ```markdown
   ---
   layout: base.njk
   title: "Your Page Title"
   header:
     title: "Your Header Title"
     courseInfo: "Course info here"
     instructorInfo: "Instructor info here"
   ---
   
   Your content in Markdown here...
   ```

3. The page will automatically use your existing CSS styling

## Benefits

- ✅ **Easier content editing** - just write in Markdown
- ✅ **Same visual design** - CSS styling is preserved
- ✅ **Faster updates** - no more HTML tags to manage
- ✅ **Better organization** - content and presentation are separated
- ✅ **Easy to maintain** - simple file structure

## Converting Existing Pages

To convert your other HTML pages (like `schedule.html`, `tutorials.html`, etc.):

1. Copy the content from the HTML `<body>` section
2. Create a new `.md` file in `src/`
3. Add the front matter with appropriate header info
4. Convert HTML to Markdown (most content can be converted automatically)

Your existing CSS classes and styling will work exactly the same! 
