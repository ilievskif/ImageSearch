import axios  from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9113ebeaf0dfe6e473d57fdabbba10174c2101b351a6a3eaa8784d0da14a0ed3'
  }
});
