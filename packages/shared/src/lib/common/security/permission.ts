// Check access-control-list.ts for the list of permissions, you can add new permissions there, restart the main server to apply the changes
export enum Permission {
    READ_APP_CONNECTION = 'READ_APP_CONNECTION',
    WRITE_APP_CONNECTION = 'WRITE_APP_CONNECTION',
    READ_FLOW = 'READ_FLOW',
    WRITE_FLOW = 'WRITE_FLOW',
    UPDATE_FLOW_STATUS = 'UPDATE_FLOW_STATUS',
    WRITE_INVITATION = 'WRITE_INVITATION',
    READ_INVITATION = 'READ_INVITATION', 
    READ_PROJECT_MEMBER = 'READ_PROJECT_MEMBER',
    WRITE_PROJECT_MEMBER = 'WRITE_PROJECT_MEMBER',
    WRITE_PROJECT_RELEASE = 'WRITE_PROJECT_RELEASE',
    READ_PROJECT_RELEASE = 'READ_PROJECT_RELEASE',
    READ_RUN = 'READ_RUN',
    WRITE_RUN = 'WRITE_RUN',
    READ_ISSUES = 'READ_ISSUES',
    WRITE_ISSUES = 'WRITE_ISSUES',
    READ_FOLDER = 'READ_FOLDER',
    WRITE_FOLDER = 'WRITE_FOLDER',
    WRITE_ALERT = 'WRITE_ALERT',
    READ_ALERT = 'READ_ALERT',
    WRITE_PROJECT = 'WRITE_PROJECT',
    READ_PROJECT = 'READ_PROJECT',
    READ_MANUAL_TASKS = 'READ_MANUAL_TASKS',
    WRITE_MANUAL_TASK = 'WRITE_MANUAL_TASK',
    READ_TABLE = 'READ_TABLE',
    WRITE_TABLE = 'WRITE_TABLE',
}

export enum RoleType {
    DEFAULT = 'DEFAULT',
    CUSTOM = 'CUSTOM',
}