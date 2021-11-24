# GridAdapter

## Purpose

There are many well-known UI component libraries. In each component library, the most complex functions are Grid and Chart. Many people choose 1 component library for development.

But as the needs change, the component library they choose may become unsuitable. However, different component libraries are used in different ways, and the front-end code may need to be rewritten to convert another component library.

This project wants to produce the abstract interface of the grid of different component libraries, so that it is no longer difficult to replace the grid of the component library.

I chose a few well-known Grid as targets, listed as follows

1. Sencha ExtJS (<https://www.sencha.com/>)
2. jqGrid(<http://guriddo.net/>)
3. AG Grid(<https://www.ag-grid.com/>)
4. DataTables(<https://www.datatables.net/>)

The preliminary goals are as follows:

1. Implement some basic functions with each component library
2. Abstract their common functions and define the interface.
3. Make a component adapter for each component library.

## Install

1. Please Use npm install to install packages.
2. Please get component library from the corresponding official website and put into public folder.