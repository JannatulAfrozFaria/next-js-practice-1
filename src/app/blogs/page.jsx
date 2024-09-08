import Link from "next/link";

const BlogsPage = () => {
    return (
        <div>
            <h1>This is the Blogs section where you can go through blogs written by our contributors</h1>
            <div className="grid grid-cols-3 gap-4 w-5/6 mx-auto my-8">
                {
                    blogs.map((blog => 
                        <div key={blog.id} className="border-2 p-12" >  
                            <h3 className="text-sky-600 font-semibold"> {blog.title} </h3>
                            <p> {blog.description} </p>
                            <button className="bg-sky-200 p-2 rounded-md my-3 text-sky-800">
                                <Link href={`/blogs/${blog.id}`} >View Details</Link>
                            </button>
                        </div>
                     ))
                }
            </div>
        </div>
    );
};

const blogs = [
    {
      "id": 1,
      "title": "The Benefits of Daily Exercise",
      "description": "Discover how incorporating daily exercise into your routine can improve both your physical and mental well-being."
    },
    {
      "id": 2,
      "title": "Top 10 Healthy Foods for a Balanced Diet",
      "description": "Explore a list of nutrient-packed foods that will help you maintain a healthy and balanced diet."
    },
    {
      "id": 3,
      "title": "Mindfulness and Meditation: A Beginner's Guide",
      "description": "Learn the basics of mindfulness and meditation, and how these practices can reduce stress and improve focus."
    },
    {
      "id": 4,
      "title": "How to Improve Your Sleep Quality",
      "description": "Tips and strategies to help you fall asleep faster and enjoy more restful, uninterrupted sleep."
    },
    {
      "id": 5,
      "title": "5 Easy Recipes for Quick Weeknight Dinners",
      "description": "Try these simple and delicious recipes that can be made in under 30 minutes for a hassle-free dinner."
    },
    {
      "id": 6,
      "title": "The Power of Positive Thinking",
      "description": "Learn how positive thinking can transform your mindset, improve your relationships, and enhance your overall life satisfaction."
    },
    {
      "id": 7,
      "title": "How to Stay Productive While Working from Home",
      "description": "Master the art of remote work with these productivity tips designed to keep you focused and efficient."
    },
    {
      "id": 8,
      "title": "Top 5 Travel Destinations for Nature Lovers",
      "description": "Discover the best places around the world to experience breathtaking natural landscapes and outdoor adventures."
    },
    {
      "id": 9,
      "title": "The Importance of Hydration for Your Health",
      "description": "Learn why staying hydrated is essential for maintaining your energy, mood, and overall health."
    },
    {
      "id": 10,
      "title": "Home Organization Tips to Declutter Your Space",
      "description": "Get inspired to declutter and organize your home with these easy and effective tips."
    },
    {
      "id": 11,
      "title": "Understanding the Basics of Cryptocurrency",
      "description": "An introduction to cryptocurrency and how digital currencies are changing the future of finance."
    },
    {
      "id": 12,
      "title": "The Benefits of Reading for Mental Health",
      "description": "Explore how reading can help reduce stress, increase empathy, and promote mental well-being."
    }
]  

export default BlogsPage;