import styled from 'styled-components';

const CategoryItemNormal = styled.button`
background-color: var(--font-color);
border: 1px solid var(--accent-color-dark);  
border-radius: 8px;
color: var(--accent-color-dark);  
cursor: pointer;
font-size: 16px;
padding: 4px 8px; 
`;

const CategoryItemSelected = styled.button`
background-color: var(--accent-color-dark);
color: var(--font-color);
border: 1px solid var(--accent-color-dark);  
border-radius: 8px;    
cursor: pointer;
font-size: 16px;
padding: 4px 8px;
`;

export { CategoryItemNormal, CategoryItemSelected };
