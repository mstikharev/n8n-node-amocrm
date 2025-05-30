import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['getLinks'],
			},
		},
		options: [
			{
				name: 'Lead',
				value: 'leads',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Company',
				value: 'companies',
			},
			{
				name: 'Customer',
				value: 'customers',
			},
		],
		default: 'leads',
		description: 'The type of the main entity to get links for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['getLinks'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['getLinks'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['getLinks'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		description: 'Page number to retrieve',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['links'],
				operation: ['getLinks'],
			},
		},
		options: [
			{
				displayName: 'Entity IDs',
				name: 'entity_id',
				type: 'string',
				default: '',
				description: 'Comma-separated list of entity IDs to filter by',
			},
			{
				displayName: 'Target Entity Type',
				name: 'to_entity_type',
				type: 'options',
				options: [
					{
						name: 'Catalog Element',
						value: 'catalog_elements',
					},
					{
						name: 'Company',
						value: 'companies',
					},
					{
						name: 'Contact',
						value: 'contacts',
					},
					{
						name: 'Customer',
						value: 'customers',
					},
					{
						name: 'Lead',
						value: 'leads',
					},
				],
				default: 'catalog_elements',
				description: 'Filter by target entity type',
			},
			{
				displayName: 'Target Entity IDs',
				name: 'to_entity_id',
				type: 'string',
				default: '',
				description: 'Comma-separated list of target entity IDs to filter by',
			},
		],
		description: 'Additional filters to apply',
	},
];