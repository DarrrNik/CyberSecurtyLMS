<template>
  <div class="main-container">
    <TheHeader />
    <div class="content-wrapper">
      <TheSideBar />
      <main class="all-tasks">
        <div v-if="loading" class="loading">Загрузка курсов...</div>
        <div v-else-if="error" class="error">
          {{ error }}
        </div>
        <template v-else>
          <MyCourseCard
            v-for="vulnerability in vulnerabilities"
            :key="vulnerability.id"
            :title="vulnerability.id"
            :description="vulnerability.description"
            :courseId="vulnerability.id"
            :gradient="vulnerability.gradient"
            :title-color="vulnerability.titleColor"
            :accent-color="vulnerability.accentColor"
            :progress="vulnerability.progress"
          />
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue"
import TheSideBar from "@/components/common/TheSideBar.vue"
import MyCourseCard from "@/components/my_courses/MyCourseCard.vue"
import { courseService } from "@/services/courseService"

export default {
  components: {
    TheHeader,
    TheSideBar,
    MyCourseCard,
  },
  name: "AllTasks",
  data() {
    return {
      vulnerabilities: [],
      loading: false,
      error: null,
    }
  },
  async created() {
    try {
      this.loading = true
      const response = await courseService.getCourses()
      this.vulnerabilities = response
    } catch (error) {
      this.error = error.error || "Failed to load courses"
      console.error("Error loading courses:", error)
    } finally {
      this.loading = false
    }
  },
}
</script>

<style scoped>
@import "@/assets/styles/courses.css";

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.error {
  text-align: center;
  padding: 2rem;
  color: #dc3545;
  font-size: 1.2rem;
}
</style>
