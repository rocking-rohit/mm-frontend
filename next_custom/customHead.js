import React, { Component } from 'react'
import { Head } from 'next/document';

class HeadCustom extends Head {
	getCssLinks(files) {
		const { assetPrefix } = this.context;
		const allFiles = [...new Set([...files.allFiles, ...files.sharedFiles, ...files.pageFiles])];
		const cssFiles = allFiles && allFiles.length ? allFiles.filter(f => /\.css$/.test(f)) : [];
		const cssLinkElements = [];
		cssFiles.forEach((file) => {
			cssLinkElements.push(
				<link key={file} nonce={this.props.nonce} rel="stylesheet"
					href={`${assetPrefix}/_next/${encodeURI(file)}`}
					crossOrigin={"anonymous"}
        />
		);
	});

	  return cssLinkElements.length === 0 ? null : cssLinkElements;
	return [];
	}

	getPreloadMainLinks() {
		return [];
	}

	getPreloadDynamicChunks() {
		return [];
	}
}

export default HeadCustom;
