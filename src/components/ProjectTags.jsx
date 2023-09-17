import React from 'react';
import ProjectTag from './ProjectTag';
import { css } from '@emotion/react';

const ProjectTags = ({tags}) => {
    return (
        <div css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            // paddingRight: '10px',
            flexWrap: 'wrap',
            'div': {
                marginBottom: '3px'
            }
        }}>  
            <ProjectTag>React</ProjectTag>
            <ProjectTag>Express</ProjectTag>
            <ProjectTag>Node</ProjectTag>
            <ProjectTag>Postgres</ProjectTag>
            <ProjectTag>Sequelize</ProjectTag>
        </div>
    );
}

export default ProjectTags;
