import { useState } from "react";
import {
  MessageSquare,
  Lightbulb,
  AlertTriangle,
  Calendar,
  User,
  Clock,
  ChevronDown,
  Search,
  Plus,
} from "lucide-react";

const CommunityForum = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedPost, setExpandedPost] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Forum categories
  const categories = [
    { id: "all", name: "All Discussions", icon: <MessageSquare size={18} /> },
    { id: "new", name: "New Hosts", icon: <User size={18} /> },
    { id: "tips", name: "Tips & Tricks", icon: <Lightbulb size={18} /> },
    { id: "issues", name: "Issues", icon: <AlertTriangle size={18} /> },
    { id: "events", name: "Events", icon: <Calendar size={18} /> },
  ];

  // Sample forum posts
  const forumPosts = [
    {
      id: 1,
      title: "How to handle last-minute cancellations?",
      content:
        "I've had two guests cancel within 24 hours this month. What's your policy for handling these situations?",
      author: "SarahM",
      timestamp: "2 hours ago",
      category: "new",
      replies: [
        {
          id: 101,
          content:
            "I always require a 50% non-refundable deposit for last-minute cancellations. It's in my house rules.",
          author: "HostPro123",
          timestamp: "1 hour ago",
        },
        {
          id: 102,
          content:
            "I use flexible cancellation but charge a small fee for last-minute cancellations to cover cleaning costs.",
          author: "TravelHome",
          timestamp: "45 minutes ago",
        },
      ],
    },
    {
      id: 2,
      title: "Best cleaning products for vacation rentals?",
      content:
        "Looking for recommendations on durable, effective cleaning products that work well for frequent turnover.",
      author: "CleanFreak",
      timestamp: "1 day ago",
      category: "tips",
      replies: [
        {
          id: 201,
          content:
            "I swear by Method all-purpose cleaner - eco-friendly and works on most surfaces!",
          author: "EcoHost",
          timestamp: "22 hours ago",
        },
      ],
    },
    {
      id: 3,
      title: "Upcoming host meetup in Chicago - June 15",
      content:
        "We're organizing a casual meetup for local hosts to share experiences. DM me for details!",
      author: "WindyCityHost",
      timestamp: "3 days ago",
      category: "events",
      replies: [],
    },
    {
      id: 4,
      title: "Dealing with noisy guests - what's reasonable?",
      content:
        "Had a group that was loud until 2am last night. How do you handle noise complaints without bad reviews?",
      author: "QuietSpace",
      timestamp: "5 days ago",
      category: "issues",
      replies: [
        {
          id: 401,
          content:
            "I include quiet hours (10pm-8am) in my listing and send a reminder message at check-in.",
          author: "PeacefulRetreat",
          timestamp: "4 days ago",
        },
        {
          id: 402,
          content:
            "Invest in a noise monitoring device like Minut - it alerts guests when they're too loud without you needing to intervene.",
          author: "TechHost",
          timestamp: "3 days ago",
        },
      ],
    },
  ];

  // Filter posts by category
  const filteredPosts =
    activeCategory === "all"
      ? forumPosts
      : forumPosts.filter((post) => post.category === activeCategory);

  // Handle reply submission
  const handleReplySubmit = (postId) => {
    if (!replyContent.trim()) return;

    const post = forumPosts.find((p) => p.id === postId);
    if (post) {
      post.replies.push({
        id: Math.floor(Math.random() * 10000),
        content: replyContent,
        author: "CurrentUser", // In a real app, this would be the logged-in user
        timestamp: "Just now",
      });
      setReplyContent("");
      setExpandedPost(postId);
    }
  };

  // Handle new post submission
  const handleNewPostSubmit = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const newPost = {
      id: Math.floor(Math.random() * 10000),
      title: newPostTitle,
      content: newPostContent,
      author: "CurrentUser",
      timestamp: "Just now",
      category: activeCategory,
      replies: [],
    };

    forumPosts.unshift(newPost);
    setNewPostTitle("");
    setNewPostContent("");
    setShowNewPostForm(false);
    setActiveCategory(activeCategory); // Refresh the view
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Host Community Forum
          </h1>
          <p className="text-lg text-gray-600">
            Connect with fellow hosts, share experiences, and get advice
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories and Search */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#ff385c] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search forum..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff385c]/50"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* New Post Button */}
        {/* <button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-[#ff385c] text-white rounded-lg hover:bg-[#e03148] transition-colors"
        >
          <Plus size={18} />
          New Post
        </button> */}

        {/* New Post Form */}
        {/* {showNewPostForm && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Create New Post
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/50"
                  placeholder="What's your question or topic?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/50"
                  placeholder="Share your thoughts or ask your question..."
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNewPostSubmit}
                  className="px-4 py-2 bg-[#ff385c] text-white rounded-lg hover:bg-[#e03148]"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* Forum Posts */}
        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No posts found in this category. Start a new discussion!
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Post Header */}
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedPost(expandedPost === post.id ? null : post.id)
                  }
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <User size={14} />
                        <span>{post.author}</span>
                        <Clock size={14} />
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {categories.find((c) => c.id === post.category)?.name}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`ml-2 text-gray-400 transition-transform ${
                          expandedPost === post.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Post Content and Replies */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedPost === post.id ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line">
                      {post.content}
                    </p>
                  </div>

                  {/* Replies */}
                  {post.replies.length > 0 && (
                    <div className="bg-gray-50 p-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        {post.replies.length}{" "}
                        {post.replies.length === 1 ? "Reply" : "Replies"}
                      </h4>
                      <div className="space-y-4">
                        {post.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="pl-4 border-l-2 border-[#ff385c]/30"
                          >
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                              <User size={14} />
                              <span>{reply.author}</span>
                              <Clock size={14} />
                              <span>{reply.timestamp}</span>
                            </div>
                            <p className="text-gray-700 whitespace-pre-line">
                              {reply.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reply Form */}
                  <div className="p-4">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write your reply..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/50 mb-2"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleReplySubmit(post.id)}
                        className="px-4 py-2 bg-[#ff385c] text-white rounded-lg hover:bg-[#e03148] disabled:opacity-50"
                        disabled={!replyContent.trim()}
                      >
                        Post Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
