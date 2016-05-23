/* tslint:disable:no-unused-variable */
import * as React from "react";
import {css} from "./css/main";
import {fontAwesome} from "./css/fontAwesome";

const CurrentDirectory = ({currentWorkingDirectory}: { currentWorkingDirectory: string }) =>
    <div className="current-directory">{currentWorkingDirectory}</div>;

const VcsDataComponent = ({data}: { data: VcsData }) => {
    if (!data.isRepository) {
        /* tslint:disable:no-null-keyword */
        return null;
    }

    return (
        <div style={css.statusLine.vcsData}>
            <div style={css.statusLine.status(data.status)}>
                <span style={css.statusLine.icon} dangerouslySetInnerHTML={{__html: fontAwesome.codeFork}}/>
                {data.branch}
            </div>
        </div>
    );
};

const StatusLine = ({currentWorkingDirectory, vcsData}: { currentWorkingDirectory: string; vcsData: VcsData }) =>
    <div className="status-line">
        <CurrentDirectory currentWorkingDirectory={currentWorkingDirectory}/>
        <VcsDataComponent data={vcsData}/>
    </div>;

export default StatusLine;
