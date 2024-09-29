import { createRouter, createWebHistory } from 'vue-router';
import ProjectViewer from './pages/ProjectViewer.vue';

const routes = [
  {
    path: '/',
    name: 'ProjectViewer',
    component: ProjectViewer
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
