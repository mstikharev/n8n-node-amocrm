import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Entity Type',
		name: 'entityType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['fields'],
				operation: ['getCustomFields'],
			},
		},
		options: [
			{
				name: 'Company',
				value: 'companies',
			},
			{
				name: 'Contact',
				value: 'contacts',
			},
			{
				name: 'Lead',
				value: 'leads',
			},
		],
		default: 'leads',
		description: 'The type of entity to get custom fields for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['fields'],
				operation: ['getCustomFields'],
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
				resource: ['fields'],
				operation: ['getCustomFields'],
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
				resource: ['fields'],
				operation: ['getCustomFields'],
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
		displayName: 'Additional Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['fields'],
				operation: ['getCustomFields'],
			},
		},
		options: [
			{
				displayName: 'Field IDs',
				name: 'field_ids',
				type: 'string',
				default: '',
				description: 'Comma-separated list of specific field IDs to retrieve',
			},
			{
				displayName: 'Field Types',
				name: 'field_types',
				type: 'multiOptions',
				options: [
					{
						name: 'Birthday',
						value: 'birthday',
					},
					{
						name: 'Checkbox',
						value: 'checkbox',
					},
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Multiselect',
						value: 'multiselect',
					},
					{
						name: 'Numeric',
						value: 'numeric',
					},
					{
						name: 'Phone',
						value: 'phone',
					},
					{
						name: 'Radiobutton',
						value: 'radiobutton',
					},
					{
						name: 'Select',
						value: 'select',
					},
					{
						name: 'Smart Address',
						value: 'smart_address',
					},
					{
						name: 'Street Address',
						value: 'streetaddress',
					},
					{
						name: 'Text',
						value: 'text',
					},
					{
						name: 'Textarea',
						value: 'textarea',
					},
					{
						name: 'URL',
						value: 'url',
					},
				],
				default: [],
				description: 'Filter by specific field types',
			},
		],
	},
];