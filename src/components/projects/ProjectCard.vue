<template>
  <div class="project-card-container">
    <div class="project-card-inner">
      <div class="card-content">
        <div class="card-header">
          <svg xmlns="http://www.w3.org/2000/svg" class="project-folder" role="img" viewBox="0 0 60 60">
            <title>Folder</title>
            <path d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z" />
          </svg>
          <a :href="externalLink" :aria-label="ariaLabel" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="external-project-link" role="img" viewBox="0 0 194.818 194.818">
              <title>External</title>
              <g>
                <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z" />
                <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z" />
              </g>
            </svg>
          </a>
        </div>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-description">{{ description }}</p>
      </div>
      <div>
        <ul class="tech-stack">
          <li v-for="(item, i) in technologies" :key="i" class="tech-stack-item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    ariaLabel: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    externalLink: {
      type: String,
      default: ''
    },
    technologies: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card-container {
  width: 350px;
  margin: 10px 10px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .4),
  0 4px 5px 0 rgba(0, 0, 0, .25),
  0 1px 10px 0 rgba(0, 0, 0, .23);
}

.project-card-inner {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: var(--custom-color);
  padding: 25px;
  border-radius: 2px;

  .card-header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;

    svg {
      fill: #701390FF
    }

    svg.project-folder {
      width: 40px;
      height: 40px;
    }

    svg.external-project-link {
      width: 20px;
      height: 20px;
    }
  }

  .card-title {
    font-size: 22px;
    color: rgb(204, 214, 246);
    margin: 0px 0px 10px;
  }

  .card-description {
    font-size: 14px;
    text-align: left;
  }
}

.tech-stack {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;

.tech-stack-item {
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  font-size: 12px;
  color: rgb(168, 178, 209);
  line-height: 1.75;
  margin-right: 22px;
  }
}
</style>
