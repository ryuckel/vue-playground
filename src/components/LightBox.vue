<template>
	<div>
		<div class="media">
			<div class="column">
				<h1>画像一覧</h1>
				<div class="columns is-multiline">
					<div v-for="(image, index) in images" :key="image.id" class="column is-one-quarter has-text-centered">
						<img v-lazy="image.src" @click="openGallery(index)" class="thumbnail" />
						<p>{{ image.title }}</p>
					</div>
				</div>
				<ImageLightBox ref="lightbox" :images="images" :show-light-box="false" :show-caption="true"></ImageLightBox>
			</div>
		</div>
	</div>
</template>

<script>
import ImageLightBox from 'vue-image-lightbox';

export default {
	name: 'LightBox',
	components: {
		ImageLightBox
	},
	data() {
		return {
			images: [
				{
					thumb: 'https://www.pakutaso.com/shared/img/thumb/YAMAhokkaido015_TP_V.jpg',
					src: 'https://www.pakutaso.com/shared/img/thumb/YAMAhokkaido015_TP_V.jpg',
					title: '朝日が昇る摩周湖（北海道川上郡弟子屈町）',
					caption: '朝日が昇る摩周湖（北海道川上郡弟子屈町）',
					id: 1
				},
				{
					thumb: 'https://www.pakutaso.com/shared/img/thumb/YAMAhokkaido032_TP_V.jpg',
					src: 'https://www.pakutaso.com/shared/img/thumb/YAMAhokkaido032_TP_V.jpg',
					title: '水鏡の青い池（北海道川上郡美瑛町白金）',
					caption: '水鏡の青い池（北海道川上郡美瑛町白金）',
					id: 2
				},
				{
					thumb: 'https://www.pakutaso.com/shared/img/thumb/KMKC428D354_TP_V.jpg',
					src: 'https://www.pakutaso.com/shared/img/thumb/KMKC428D354_TP_V.jpg',
					title: '悪天候の上高地と大正池',
					caption: '悪天候の上高地と大正池',
					id: 3
				}
			]
		};
	},
	methods: {
		openGallery(index) {
			this.$refs.lightbox.showImage(index);
		}
	}
};
</script>
<style lang="scss" scoped>
img.thumbnail {
	height: 100px;
	cursor: pointer;
}
</style>
