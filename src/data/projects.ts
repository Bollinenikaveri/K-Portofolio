import { Project } from '@/lib/types';
import { getAssetPath } from '@/lib/utils';

export const projects: Project[] = [
  {
    id: 'image-super-resolution',
    title: 'Image Super Resolution',
    description: 'The image super resolution project using ESRGAN (Enhanced Super Resolution Generative Adversarial Networks) focuses on improving image quality by generating high-resolution images from low-resolution inputs.',
    longDescription: 'The image super resolution project using ESRGAN (Enhanced Super Resolution Generative Adversarial Networks) focuses on improving image quality by generating high-resolution images from low-resolution inputs. This project involves training a deep learning model to upscale images while preserving details and enhancing visual clarity.',
    technologies: ['Python', 'PyTorch', 'ESRGAN', 'OpenCV'],
    features: [
      'High-resolution image generation',
      'Detail preservation and enhancement',
      'Deep learning model training',
      'Real-time image upscaling'
    ],
    githubUrl: 'https://github.com/Bollinenikaveri/image-super-resolution',
    liveUrl: undefined,
    imageUrl: getAssetPath('/assets/images/projects/image-super-resolution.jpg'),
    category: 'web',
    status: 'completed',
    startDate: '2024-01',
    endDate: '2024-03',
  },
  {
    id: 'face-detection',
    title: 'Face Detection',
    description: 'Face detection using OpenCV identifies and locates human faces in images or videos using Haar Cascades or DNN models. This project involves Python, OpenCV, and computer vision skills.',
    longDescription: 'Face detection using OpenCV identifies and locates human faces in images or videos using Haar Cascades or DNN models. This project involves Python, OpenCV, and computer vision skills. The system can be used for various applications, including security, attendance systems, and photo tagging.',
    technologies: ['Python', 'OpenCV', 'Haar Cascades', 'DNN'],
    features: [
      'Real-time face detection',
      'Image and video processing',
      'Haar Cascades and DNN models',
      'Computer vision applications'
    ],
    githubUrl: 'https://github.com/Bollinenikaveri/face-detection',
    liveUrl: undefined,
    imageUrl: getAssetPath('/assets/images/projects/face-detection.jpg'),
    category: 'web',
    status: 'completed',
    startDate: '2024-04',
    endDate: '2024-05',
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting',
    description: 'Weather forecasting uses historical and real-time meteorological data to predict future weather conditions. This project involves Python, machine learning, and data analysis skills.',
    longDescription: 'Weather forecasting uses historical and real-time meteorological data to predict future weather conditions. This project involves Python, machine learning, and data analysis skills. The system provides accurate weather predictions, including temperature, humidity, and wind speed.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'API Integration'],
    features: [
      'Accurate weather predictions',
      'Historical and real-time data analysis',
      'Machine learning models',
      'API integration for data retrieval'
    ],
    githubUrl: 'https://github.com/Bollinenikaveri/weather-forecasting',
    liveUrl: undefined,
    imageUrl: getAssetPath('/assets/images/projects/weather-forecasting.jpg'),
    category: 'web',
    status: 'completed',
    startDate: '2024-03',
    endDate: '2024-05',
  },
];

// Group projects by category
export const projectsByCategory = {
  web: projects.filter(p => p.category === 'web'),
  mobile: projects.filter(p => p.category === 'mobile'),
  automation: projects.filter(p => p.category === 'other'),
};

// Get featured projects
export const featuredProjects = projects.slice(0, 3);

// Get recent projects
export const recentProjects = projects
  .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
  .slice(0, 4);
