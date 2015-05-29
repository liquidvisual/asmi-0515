---
layout: internal/text_page
title: Sitemap
permalink: /sitemap/
---

<!--- This child document initializes the page in Jekyll. -->

<div class="row">
	<div class="columns">
		<h2>All Available Pages for {{ site.data.settings.title }}</h2>

		<ul class="triangle-list">
			{% for item in site.pages %}
				<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
			{% endfor %}
		</ul>

		<h2>Breakpoints (pxs)</h2>

		<table style="width: 300px;">
			<tr>
				<td>Small</td>
				<td>640</td>
			</tr>
			<tr>
				<td>Medium</td>
				<td>641 - 980</td>
			</tr>
			<tr>
				<td>Large</td>
				<td>981 - 1024</td>
			</tr>
			<tr>
				<td>xLarge</td>
				<td>1025 - 1120</td>
			</tr>
			<tr>
				<td>xxLarge</td>
				<td>N/A</td>
			</tr>
		</table>
	</div>
</div>

<h3>Themes</h3>

<p>This website has an overriding theme to emulate the less modern look. To use the legacy theme, place a <b>legacy-theme</b>  class on the <b>.lv-super</b> div immediately below the body.</p>

<h3>Notes</h3>

<p class="panel">Remove <b>'.dev-mode-enabled'</b> class near the body to disable the responsive helper widget.</p>
