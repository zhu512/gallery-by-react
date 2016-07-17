'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');

//var imageURL = require('../images/yeoman.png');
//获取图片名信息，利用自执行函数 把图片名信息转换为图片路径
imageDatas = (function genImageURL(imageDatasArr){
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;

})(imageDatas);

imageDatas = genImageURL(imageDatas);

var GalleryByReactApp = React.createClass({
  render: function() {
    return (
       	<section className="stage">
    	   <section className="img-sec">
    	   </section>
    	   <nav className="controller-nav">
    	   </nav>
    	</section>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
