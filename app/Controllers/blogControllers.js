const fs = require('fs');
const axios = require('axios');
const _ = require('lodash');

exports.retriveAndAnalyzeData = async (req, res) => {
    try {
        const apiUrl = "https://intent-kit-16.hasura.app/api/rest/blogs";
        const response = await axios.get(apiUrl, {
            headers: {
                'x-hasura-admin-secret': "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
            },
        });

        const blog_data = response.data.blogs;

        // Call the data analysis function
        const newBlogData = await analyzeBlogData(blog_data);

        // Store the data in a JSON file
        fs.writeFile('blog_data.json', JSON.stringify(newBlogData), (err) => {
            if (err) {
                res.status(500).json({ error: 'Error storing blog data.' });
            } else {
                res.status(200).json(newBlogData);
            }
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.blogSearch = async (req, res) => {
    const { Title } = req.query;
    if (!Title) {
        return res.status(400).json({ error: 'Title query parameter is required.' });
    }

    try {
        fs.readFile('blog_data.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error getting data from file:', err);
                return res.status(500).json({ error: 'Error getting blog data.' });
            }

            const blogData = JSON.parse(data);

            // Filter the data based on the search query
            const filteredBlogs = blogData.uniqueBlogTitles.filter((title) =>
                title.toLowerCase().includes(Title.toLowerCase())
            );

            res.status(200).json({ results: filteredBlogs });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// analyze blog data
function analyzeBlogData(blog_data) {

    // total number of blogs
    const totalBlogs = blog_data.length;

    // Find the blog with the longest title
    const longestBlog = _.maxBy(blog_data, (blog) => blog.title.length);
    const longestBlogTitle = longestBlog.title;

    // blogs with titles containing the word "privacy"
    const blogsWithPrivacy = blog_data.filter((blog) =>
        blog.title.toLowerCase().includes('privacy')
    ).length;

    // array of unique blog titles without duplicates
    const uniqueBlogTitles = _.uniqBy(blog_data, 'title').map((blog) => blog.title);

    const responseData = {
        totalBlogs,
        longestBlogTitle,
        blogsWithPrivacy,
        uniqueBlogTitles
    };

    return responseData;
}
