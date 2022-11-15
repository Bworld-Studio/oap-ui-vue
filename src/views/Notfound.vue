<template>
<div id="Notfound" class="bg-color">
	<!-- <Header v-bind="headerParams" /> -->
	<svg class="svg-404" width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
		<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
			<path id="Polygon-1" d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup" />
			<path id="Polygon-2" d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup" />
			<path id="Polygon-3" d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup" />
			<path id="Polygon-4" d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup" />
			<path id="Polygon-5" d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup" />
		</g>
	</svg>
<div class="message-box">
	<h1 style="font-family:'Organo'">404</h1>
	<p style="font-family:'OpenSans-Regular'">Page not found</p>
	<div class="buttons-con">
		<div class="action-link-wrap">
			<a style="font-family:'OpenSans-Regular'" class="link-button link-back-button" @click="$router.back()">Go Back</a>
			<a style="font-family:'OpenSans-Regular'" class="link-button" @click="$router.push('/')">Go to Home Page</a>
		</div>
	</div>
</div>
	<!-- <img style="height: 500px;" src="/src/assets/images/pharmacy/013-pharmacy-2.svg">
	<span>404</span> -->
</div>
</template>
<script>
// Utilities
// import { ref, reactive, onMounted, computed } from 'vue'	// Fonction Vue3-Composition API
import { useI18n } from 'vue-i18n' 												// I18n
import { useRouter, useRoute } from 'vue-router'					// Fonctions du Router de Vues

// Views
import Header from '../components/header/Header.vue'									// Import de la vue Header

// API


export default {
	components: { Header }, // Déclaration d'un composants à Ajouter, ie. la barre de recherche
	setup() {
		const { t, d } = useI18n({ useScope: 'global' }) // Labels and Date
		const headerParams = { view: 'template', title: t('template.title') } // Header
		// let varNum = 0		// Variable de type nombre
		// let varObj = {}		// Variable de type objet
		// let varTab = []		// Variable de type Table
		// let varUnd = undefined	// Variable de type non défini

		// const getData = () => {
		// 	let varTemp = 'Test binding' // Accès aux variables dans le code JS
		// 	console.log('Template: Display stuff in the console')
		// 	console.log(varTemp)

		// 	varStr = varTemp
		// }

		// onMounted( () => getData() ) // Fonction qui permet d'executer une autre fonction à l'appel du composant Template

		return { t }
	}
}
</script>

<style>

#Notfound {
	background-color: var(--main-color2)
}
.svg-404 {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -250px;
	margin-left: -400px;
}
.message-box {
	height: 200px;
	width: 380px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -100px;
	margin-left: 50px;
	color: #FFF;
	font-family: Roboto;
	font-weight: 300;
}
.message-box h1 {
	font-size: 60px;
	line-height: 46px;
	margin-bottom: 40px;
}
.buttons-con .action-link-wrap {
	margin-top: 40px;
}
.buttons-con .action-link-wrap a {
	background: #68c950;
	padding: 8px 25px;
	border-radius: 4px;
	color: #FFF;
	font-weight: bold;
	font-size: 14px;
	-webkit-transition: all 0.3s linear;
	transition: all 0.3s linear;
	cursor: pointer;
	text-decoration: none;
	margin-right: 10px
}
.buttons-con .action-link-wrap a:hover {
	background: #5A5C6C;
	color: #fff;
}

#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
	-webkit-animation: float 1s infinite ease-in-out alternate;
					animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
	-webkit-animation-delay: .2s;
					animation-delay: .2s; 
}
#Polygon-3 {
	-webkit-animation-delay: .4s;
					animation-delay: .4s; 
}
#Polygon-4 {
	-webkit-animation-delay: .6s;
					animation-delay: .6s; 
}
#Polygon-5 {
	-webkit-animation-delay: .8s;
					animation-delay: .8s; 
}

@-webkit-keyframes float {
	100% {
		-webkit-transform: translateY(20px);
						transform: translateY(20px);
	}
}

@keyframes float {
	100% {
		-webkit-transform: translateY(20px);
						transform: translateY(20px);
	}
}
@media (max-width: 450px) {
	.svg-404 {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -250px;
		margin-left: -190px;
	}
	.message-box {
		top: 50%;
		left: 50%;
		margin-top: -100px;
		margin-left: -190px;
		text-align: center;
	}
}

</style>