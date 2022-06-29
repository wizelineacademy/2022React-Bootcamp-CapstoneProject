import styled from 'styled-components';

export const UiSearch = styled.div`
margin: 0 auto;
max-width: 1200px;
padding: 0 10px;

.ui-search-rescue {
    align-items: center;
    border-radius: 4px;
    flex-direction:row;
    justify-content: center;
    margin: 48px auto:
    max-width: 1018px;
    min-height: 204px;
    padding: 42px 40px 32px;
    background-color: gray;

}
.ui-search-rescue .ui-search-info {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.35;
}

.ui-search-title h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.08;
}
.ui-search-list {
    font-size: 16px;
    font-weight: 300;
    margin: 18px 10px 10px 0;
}
.ui-search-item {
    color: black;
    line-height: 1.231;
    list-style-position: outside;
    list-style-type: disc;
    margin-bottom: 3px;
    margin-left: 18px;
}
.ui-search-item li {
    list-style: none;
}
`; 